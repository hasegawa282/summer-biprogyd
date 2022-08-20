
import aws_cdk.aws_cloudfront as cf
import aws_cdk.aws_cloudfront_origins as origins
import aws_cdk.aws_s3 as s3
from aws_cdk import Stack, Tags, CfnOutput, Duration
from constructs import Construct


class CdkStack(Stack):
    def __init__(
            self,
            scope: Construct,
            app_prefix: str,
            construct_id: str,
            **kwargs):
        super().__init__(scope, construct_id, **kwargs)

        # Main web site
        bucket = s3.Bucket(
            self,
            'webpage-bucket',
            bucket_name=f'{app_prefix}-webpage-bucket',
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL)
        Tags.of(bucket).add('CmBillingGroup', app_prefix)

        # [TODO] 今は全くキャッシュしない設定にしているため、後々修正が必要
        cf.CachePolicy(
            self,
            'cache_policy',
            cookie_behavior=cf.CacheCookieBehavior.all(),
            default_ttl=Duration.seconds(1),
            min_ttl=Duration.seconds(1),
            max_ttl=Duration.seconds(1),
            query_string_behavior=cf.CacheQueryStringBehavior.all()
        )
        # CloudFront
        distribution = cf.Distribution(
            self,
            'distribution',
            default_behavior=cf.BehaviorOptions(
                cache_policy=cf.CachePolicy.CACHING_DISABLED,
                viewer_protocol_policy=cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,  # noqa: E501
                origin=origins.S3Origin(bucket)),
            comment=app_prefix,
            default_root_object='index.html',
            error_responses=[
                cf.ErrorResponse(
                    http_status=403,
                    response_page_path='/index.html',
                    response_http_status=200
                )
            ])
        # distribution.add_behavior(
        #     path_pattern='/api/*',
        #     origin=origins.HttpOrigin(
        #         f'{httpapi.api_id}.execute-api.ap-northeast-1.amazonaws.com'),
        #     allowed_methods=cf.AllowedMethods.ALLOW_ALL,
        #     cache_policy=cache_policy,
        #     viewer_protocol_policy=cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS)
        CfnOutput(
            self,
            'cloudfront-domain-name',
            value=distribution.domain_name,
            export_name=f'{app_prefix}-distribution-domain-name')
