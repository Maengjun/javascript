function solution(str_list) {
    // "l"과 "r"의 인덱스를 찾음
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");

    // "l" 또는 "r"이 없는 경우 빈 리스트 반환
    if (lIndex === -1 && rIndex === -1) {
        return [];
    }

    // "l"과 "r" 중 먼저 나오는 문자열을 기준으로 왼쪽이나 오른쪽에 있는 문자열들을 추출하여 반환
    if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
        return str_list.slice(0, lIndex);
    } else {
        return str_list.slice(rIndex + 1);
    }
}