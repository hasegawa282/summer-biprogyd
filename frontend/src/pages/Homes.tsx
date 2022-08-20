import { Spinner } from '@blueprintjs/core';
import { attendancesGetAPI } from 'api/attendances';
import useAttendances from 'hooks/useAttendances/useAttendances';
import React, { useState, useEffect, useCallback } from 'react';

export interface TestInterface {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
/** テスト画面 **/
export default function Homes() {
  const [attendances, { setAttendances }] = useAttendances();
  const loadAttendances = useCallback(async () => {
    const res = await attendancesGetAPI({
      user_id: 1,
    });
    console.log(res);
    if (res.status === 200) {
      setAttendances(res.data);
    }
  }, []);
  useEffect(() => {
    void (async function () {
      await loadAttendances();
    })();
  }, []);
  return (
    <div>
      <div>aaaa</div>
      <div>
        {attendances ? (
          attendances.map((att, index) => {
            return <div key={index}>{att.user_name}</div>;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
