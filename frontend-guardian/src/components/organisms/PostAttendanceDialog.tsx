// -- basic library --

// -- http connection library --

// -- external components --
import BpDialog, { BpDialogProps } from 'components/atoms/BpDialog';
// import InputComponent from 'components/molecules/InputCompont';
// import InputBox from 'components/atoms/InputBox';
// import useString from 'hooks/useString/useString';
import { Footer } from 'components/atoms/StyledTag';
import RoundedButton from 'components/atoms/RoundedButton';
// import { Dataset, trainingDatasetPostAPI } from 'api/training-datasets';
import { Weaken } from 'utils/types';
// import { validateDatasetName } from 'utils/validates';
// import AlertDialog from 'components/organisms/AlertDialog';
import InputComponent from 'components/molecules/InputCompont';
import useReason from 'hooks/useReason/useReason';
import useBool from 'hooks/useBool/useBool';
import ToggleButton from 'components/molecules/ToggleButton';

// -- external datas --

// -- external functions --

// -- external types --
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PostAttendanceDialogProps extends Weaken<BpDialogProps, 'onClose'> {
  onClose: (cancel?: boolean) => void;
}

// -- main component --
const PostAttendanceDialog = (props: PostAttendanceDialogProps) => {
  const [reason, setReason] = useReason();
  const [attend, { onSwitch }] = useBool();
  // 出欠を変更する関数
  // const onChangeAttend = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

  // }, []);
  // 完了した時の関数
  const onFinish = () => {
    // バリデーション
    // try {
    //   validateDatasetName(dataset_name);
    // } catch (e) {
    //   if (e instanceof Error) {
    //     AlertDialog.show(e.message);
    //   }
    //   return;
    // }
    // データセット名を元にデータセットを作成(裏側でtenant_idに紐づくカートテーブルから作成する)
    // const res: Dataset | null = trainingDatasetPostAPI({
    //   dataset_name: dataset_name,
    // });
    // if (res) {
    //   props.onClose(false);
    // }
  };
  // -- render part --
  return (
    <BpDialog
      isOpen={props.isOpen}
      onClose={() => props.onClose(true)}
      title="本日の出欠登録"
      canOutsideClickClose={false}
    >
      <InputComponent title="出欠">
        <ToggleButton checked={attend} onClick={onSwitch} ok_text="出席" off_text="欠席" />
      </InputComponent>
      {attend === false && (
        <InputComponent title="出欠理由">
          <textarea rows={10} cols={60} value={reason} onChange={(e) => setReason(e.currentTarget.value)} />
        </InputComponent>
      )}
      <Footer>
        <RoundedButton onClick={() => props.onClose(true)} text="キャンセル" is_white={true} is_margin_right={true} />
        <RoundedButton onClick={onFinish} text_type="CREATE" />
      </Footer>
    </BpDialog>
  );
};

// -- finally export part --

export default PostAttendanceDialog;
