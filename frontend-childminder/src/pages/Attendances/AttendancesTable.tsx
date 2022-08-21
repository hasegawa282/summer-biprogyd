import { Spinner } from '@blueprintjs/core';
import { Attendance } from 'api/attendances';
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/atoms/BpTable';
import getAttendanceChar from 'utils/getAttendanceChar';
import { getYMD } from 'utils/operateDate';

export interface AttendancesTableProps {
  attendances?: Attendance[];
}

/** 出欠確認画面のテーブル **/
export default function AttendancesTable(props: AttendancesTableProps) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>日付</Th>
          <Th style={{ width: 60 }}>出欠</Th>
          <Th>欠席理由</Th>
          <Th>保育士からの返信</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.attendances ? (
          props.attendances.map((att, index) => {
            return (
              <Tr key={index}>
                <Td can_click={true} title={getYMD(att.entry_date)}>
                  {getYMD(att.entry_date)}
                </Td>
                <Td title={getAttendanceChar(att.attendance)}>{getAttendanceChar(att.attendance)}</Td>
                <Td title={att.reason_for_absence || ''}>{att.reason_for_absence || ''}</Td>
                <Td title={att.reply || ''}>{att.reply || ''}</Td>
              </Tr>
            );
          })
        ) : (
          <Spinner />
        )}
      </Tbody>
    </Table>
  );
}
