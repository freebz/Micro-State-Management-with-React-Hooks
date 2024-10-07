// 프락시를 활용한 변경 감지 및 불변 상태 생성하기

import { proxy } from "valtio";

const state = proxy({ count: 0 });