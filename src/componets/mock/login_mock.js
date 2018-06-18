import Mock from "mockjs";

const loginMock = Mock.mock("http://app.airmacau.com.mo/etl/api/login.ashx",{
    "SID|1": '@string("lower",14,19)'
});
export default loginMock;