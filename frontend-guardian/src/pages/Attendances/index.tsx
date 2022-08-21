import { attendancesGetAPI } from 'api/attendances';
import BpTitle from 'components/atoms/BpTitle';
import RoundedButton from 'components/atoms/RoundedButton';
import { Content, TopArea, WholeArea } from 'components/atoms/StyledTag';
import PostAttendanceDialog from 'components/organisms/PostAttendanceDialog';
import useAttendances from 'hooks/useAttendances/useAttendances';
import useIsOpen from 'hooks/useIsOpen/useIsOpen';
import { useCallback, useEffect } from 'react';
import AttendancesTable from './AttendancesTable';

/** テスト画面 **/
export default function Attendances() {
  const [attendances, { setAttendances }] = useAttendances();
  const [is_open, { onOpen, onClose }] = useIsOpen();
  const loadAttendances = useCallback(async () => {
    const res = await attendancesGetAPI({
      user_id: 1,
    });
    console.log(res);
    if (res.status === 200) {
      setAttendances(res.data);
    }
  }, [setAttendances]);
  useEffect(() => {
    void (async function () {
      await loadAttendances();
    })();
  }, [loadAttendances]);
  return (
    <WholeArea>
      <TopArea>
        <BpTitle text="ユーザ" />
        <RoundedButton text="本日の出欠" onClick={onOpen} />
      </TopArea>
      <Content>
        <AttendancesTable attendances={attendances} />
      </Content>
      {is_open && <PostAttendanceDialog isOpen={is_open} onClose={onClose} />}
    </WholeArea>
  );
}
