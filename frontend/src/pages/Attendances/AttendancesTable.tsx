import { Spinner } from '@blueprintjs/core';
import { Attendance } from 'api/attendances';
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/atoms/BpTable';

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
          <Th>出欠</Th>
          <Th>欠席理由</Th>
          <Th>保育士からの返信</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.attendances ? (
          props.attendances.map((att, index) => {
            return (
              <Tr key={index}>
                <Td>{att.entry_date}</Td>
                <Td>{att.attendance}</Td>
                <Td>{att.reason_for_absence || ''}</Td>
                <Td>{att.reply || ''}</Td>
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
