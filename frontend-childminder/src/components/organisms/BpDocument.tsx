// -- basic library --
import { ReactNode } from 'react';
import styled from 'styled-components';
import styles from 'utils/styles';
import colors from 'utils/colors';

// -- external components --
import BpFooter from 'components/atoms/BpFooter';
// import GnSideMenu from './GnSideMenu';
import BpHeader from './BpHeader';
// import { LoggedInContext } from 'hooks/authContext/authContext';
import AlertDialog from './AlertDialog';
// import AuthContextUpdater from './AuthContextUpdater';

interface BpDocumentProps {
  children?: ReactNode;
}

/**
 * ページ全体
 */
const BpDocument = (props: BpDocumentProps) => {
  return (
    <StyledDocument className="base">
      <Body>
        <BpHeader />
        <Content>{props.children}</Content>
      </Body>
      <AlertDialog />
      {/* <AuthContextUpdater /> */}
      <BpFooter />
    </StyledDocument>
  );
};

// -- styled components --
const StyledDocument = styled.div`
  display: flex;
  position: relative;
  pointer-events: 'all';
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100%);
  background-color: ${colors.background_color};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - ${styles.topmenu_height} - ${styles.footer_height});
  padding-top: 1px;
  overflow: hidden;
  overflow-y: scroll;
`;

// -- finally export part --

export default BpDocument;
