// -- basic library --
import React from 'react';
import styled from 'styled-components';
import styles from 'utils/styles';

// -- redux library --

// -- external components --

// -- external datas --
// import { AuthInfoContext } from 'hooks/authContext/authContext';
import { Popover2 } from '@blueprintjs/popover2';
import FunctionalText from 'components/atoms/FunctionalText';
import { PopoverWholeArea } from 'components/atoms/StyledTag';
import UserIcon from 'components/atoms/UserIcon';
import useIsOpen from 'hooks/useIsOpen/useIsOpen';
// import IconButton from 'components/molecules/IconButton';
// import topmenu_icon_menu from 'assets/topmenu_icon_menu.png';

// -- external functions --
// import dateShapeToDate from 'utils/convertDate';

// -- main component --
const BpHeader: React.FC = () => {
  // -- local states --
  // const [event_datas, setEventDatas] = useState<{ created_at: string; channel_name: string; channel_event_name: string }[]>([]);
  const [is_open, { onClose }] = useIsOpen();
  // const { auth_info, signOut } = useContext(AuthInfoContext);

  // -- redux preparations --

  // -- handlers --

  // -- get datas -

  // -- render part --
  return (
    <HeaderWrapper>
      <MarginText />
      <React.Fragment>
        <Popover2
          content={
            <MenuContentForPopoverWholeArea>
              <AuthName>ユーザー名</AuthName>
              <FunctionalText text=">ログアウト" onClick={() => {}} />
            </MenuContentForPopoverWholeArea>
          }
          isOpen={is_open}
          onClose={onClose}
        >
          <UserIcon size={24} />
        </Popover2>
      </React.Fragment>
    </HeaderWrapper>
  );
};

// -- styled components --

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${styles.topmenu_height};
  box-shadow: 0 1px 0 0 #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

const MarginText = styled.div`
  margin: auto;
`;

const MenuContentForPopoverWholeArea = styled(PopoverWholeArea)`
  width: 200px;
  height: 300px;
`;

// const BellContentForPopoverWholeArea = styled(PopoverWholeArea)`
//   width: 320px;
//   min-height: 450px;
// `;

// const TextArea = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: ${styles.interval_margin};
// `;

// const OccuredTimeText = styled.div`
//   font-size: ${styles.small_text_size};
//   margin-bottom: ${styles.interval_narrow_margin};
//   font-weight: bold;
// `;

// const EventText = styled.div`
//   font-size: ${styles.small_text_size};
//   font-weight: bold;
// `;

const AuthName = styled.div`
  margin-bottom: ${styles.interval_margin};
`;

// -- finally export part --

export default BpHeader;
