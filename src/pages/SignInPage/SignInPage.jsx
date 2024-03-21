import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/logo-login.png";
import { useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));

  const { data, isPending, isSuccess } = mutation;

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
    console.log("res: ", res);
  };

  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success("Đăng nhập thành công");
      console.log("data: ", data);
      navigate("/");
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  console.log("mutation: ", mutation);

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    mutation.mutate({ email, password });
    console.log("sign-in: ", email, password);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Nhập email của bạn"
            onChange={handleOnChangeEmail}
            value={email}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: "10",
                position: "absolute",
                top: "8px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="Nhập mật khẩu"
              type={isShowPassword ? "text" : "password"}
              onChange={handleOnChangePassword}
              value={password}
            />
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isLoading={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={20}
              styleButton={{
                background: "rgb(255, 57,69)",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "26px 0 10px",
              }}
              textButton={"Đăng nhập"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </Loading>
          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight
              onClick={handleNavigateSignUp}
              style={{ cursor: "pointer" }}
            >
              Tạo tài khoản
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Gear Retail</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
