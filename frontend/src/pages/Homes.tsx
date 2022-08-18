import axios from "axios";
import React, { useState, useEffect } from "react";

export interface TestInterface {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
/** テスト画面 **/
export default function Homes() {
    const [tests, setTests] = useState<TestInterface[]>([]);
    const getTests = async () => {
        const res = await axios.get("/api/BIPROGYD");
        console.log(res);
        if (res.status === 200) {
            setTests(res.data as TestInterface[]);
        }
    };
    useEffect(() => {
        void (async function () {
            await getTests();
        })();
    }, []);
    console.log(tests);
    return <div>Top画面</div>;
}
