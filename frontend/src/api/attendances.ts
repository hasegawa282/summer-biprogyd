import { getClient } from './base';
import sendAxios from './base/sendAxios';

/** エンティティ**/
export interface Attendance {
  user_id: number; // ユーザーのID
  user_name: string; // ユーザー名
  attendance: boolean; // 出席時true, 欠席時false
  reason_for_absence?: string; // 欠席時の理由
  entry_date: string; // 記入日
  reply?: string; // 返信
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

const sanple_attendance1: Attendance = {
  user_id: 1,
  user_name: '田中たかし',
  attendance: true,
  entry_date: '2022-08-21T00:00:00+09:00',
  created_at: '2022-08-21T00:00:00+09:00',
  updated_at: '2022-08-21T00:00:00+09:00',
  deleted_at: null,
};

const sanple_attendance2: Attendance = {
  user_id: 1,
  user_name: '田中たかし',
  attendance: false,
  reason_for_absence: '病欠のため欠席',
  entry_date: '2022-08-20T00:00:00+09:00',
  created_at: '2022-08-20T00:00:00+09:00',
  updated_at: '2022-08-20T00:00:00+09:00',
  deleted_at: null,
};

/*** [POST] /api/attendances/{user_id} ***/
export interface RequestAttendancesPost {
  user_id: string;
  entry_date: string;
}

export const attendancesPostAPI = (props: RequestAttendancesPost) => {
  // クライアントを定義
  const axios = getClient();

  // パス・メソッドを定義
  const path = `/api/attendances/${props.user_id}`;
  const method = 'post';

  // [get, put]クエリストリングを定義
  const query = {
    params: props,
  };

  // [put, post]リクエストボディを定義
  const form = new FormData();
  for (const [key, value] of Object.entries(props)) {
    form.append(key, value);
  }

  // 送信
  return sendAxios<Attendance>(axios, path, query, form, method, sanple_attendance1);
};

/*** [GET] /api/attendances/{user_id} ***/
export interface RequestAttendancesGet {
  user_id: number;
}

export const attendancesGetAPI = (props: RequestAttendancesGet) => {
  // クライアントを定義
  const axios = getClient();

  // パス・メソッドを定義
  const path = `/api/attendances/${props.user_id}`;
  const method = 'get';

  // [get, put]クエリストリングを定義
  const query = {
    params: props,
  };

  // [put, post]リクエストボディを定義
  const form = new FormData();
  // for (const [key, value] of Object.entries(params)) {
  //   form.append(key, value);
  // };

  // 送信
  return sendAxios<Attendance[]>(axios, path, query, form, method, [sanple_attendance1, sanple_attendance2]);
};
