import { attendancesGetAPI } from 'api/attendances';
import { Content, WholeArea } from 'components/atoms/StyledTag';
import useAttendances from 'hooks/useAttendances/useAttendances';
import { useCallback, useEffect } from 'react';
import AttendancesTable from './AttendancesTable';

/** テスト画面 **/
export default function Attendances() {
  const [attendances, { setAttendances }] = useAttendances();
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
      <div>ユーザー1の出欠記録</div>
      <Content>
        <AttendancesTable attendances={attendances} />
      </Content>
    </WholeArea>
  );
}
