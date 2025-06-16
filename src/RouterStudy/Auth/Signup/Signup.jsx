/** @jsxImportSource @emotion/react */
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from "react-icons/md";
import * as s from "./styles";
import React, { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

/* 유효성검사(Validation Check) */

function useSignInAndUpInput({ type, name, placeholder, value, valid }) {
  const STATUS = {
    idle: "idle",
    success: "success",
    error: "error",
  };

  const [inputvalue, setInputValue] = useState(value);
  const [status, setStatus] = useState(STATUS.idle);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnBlur = (e) => {
    if (isEmpty(value)) {
      setStatus(STATUS.idle);
      return;
    }
    if (valid.enabled) {
      setStatus(valid.regex.test(value) ? STATUS.success : STATUS.error);
    }
  };

  const isEmpty = (str) => {
    return !/^.+$/.test(str);
  };

  return {
    inputvalue,
    element: (
      <SignInAndUpInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        status={status}
        message={valid.defaultMessage}
      />
    ),
  };
}

function SignInAndUpInput({ type, name, placeholder, value, handleOnChange, handleOnBlur, status, message}) {

  return (
    <div css={s.inputItem}>
      <div css={s.inputContainer(status)}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          status={status}
          message={message}
        />
        <p onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <IoEyeOff /> : <IoEye />}{" "}
        </p>
        {inputState.password.status !== "idle" &&
          (inputState.password.status === "success" ? (
            <div>
              <MdOutlineCheckCircle />
            </div>
          ) : (
            <div>
              <MdOutlineErrorOutline />
            </div>
          ))}
      </div>
      <InputValidatedMessage status={status} message={message} />
    </div>
  );
}

function usePasswordInputHiddenButton() {
  return {};
}
function PasswordInputHiddenButton() {
  const [isShow, setShow] = useState(false);
  const handleOnClick = () => {
    setShow((prev) => !prev);
  };
  return <p onClick={handleOnClick}>{isShow ? <IoEyeOff /> : <IoEye />}</p>;
}

function useInputValidatedMessage({ defaultMessage }) {
  const STATUS = {
    idle: "idle",
    success: "success",
    error: "error",
  };
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(defaultMessage || "");

  return {
    status,
    setStatus,
    message,
    setMessage,
    element: <InputValidatedMessage status={status} message={message} />,
  };
}

function InputValidatedMessage({ status, message }) {
  const ERROR = "error";
  if (status === ERROR) {
    return <div css={s.messageContainer()}>{message}</div>;
  }
  return <></>;
}

function Signup(props) {
  const [inputState, setInputState] = useState({
    username: {
      value: "",
      message: "아이디는 영문, 숫자를 포함 4~20자여야합니다.",
      regex: /^(?=.*[A-Za-z])(?=.*\d).{4,20}$/,
      status: "idle", // success(성공), error(오류), idle(초기 대기상태)
    },
    password: {
      value: "",
      message:
        "비밀번호는 8자 이상이며, 영문자, 숫자, 특수문자를 포함해야 합니다.",
      regex:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,20}$/,
      status: "idle",
    },
    checkPassword: {
      value: "",
      message: "비밀번호가 일치하지 않습니다.",
      status: "idle",
    },
    fullName: {
      value: "",
      message: "이름은 2자 이상의 한글만 입력할 수 있습니다.",
      regex: /^[가-힣]{2,20}$/,
      status: "idle",
    },
    email: {
      value: "",
      message: "유효한 이메일 주소를 입력해주세요.",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      status: "idle",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [inputs, setInputs] = useState([
    {
      type: "text",
      name: "username",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[A-Za-z])(?=.*\d).{4,20}$/,
        message: "아이디는 영문, 숫자를 포함 4~20자여야합니다.",
      },
    },
    {
      type: "password",
      name: "password",
      value: "",
      valid: {
        enabled: true,
        regex:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,20}$/,
        message:
          "비밀번호는 8자 이상이며, 영문자, 숫자, 특수문자를 포함해야 합니다.",
      },
    },
    {
      type: "password",
      name: "checkPassword",
      value: "",
      valid: {
        enabled: true,
        regex: null,
        message: "비밀번호가 일치하지 않습니다.",
      },
    },
  ]);

  const inputItems = inputs.map(input => useSignInAndUpInput(input));

  const handleOnChange = (e) => {
    setInputState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
      },
    }));
  };

  const handleOnBlur = (e) => {
    if (!/^.+$/.test(inputState[e.target.name].value)) {
      setInputState((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          status: "idle",
        },
      }));
      return;
    }
    if (e.target.name === "checkPassword") {
      if (inputState.password.status === "success") {
        setInputState((prev) => ({
          ...prev,
          checkPassword: {
            ...prev["checkPassword"],
            status:
              prev["checkPassword"].value === prev["password"].value
                ? "success"
                : "error",
          },
        }));
      }
      return;
    }
    setInputState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        status: prev[e.target.name].regex.test(prev[e.target.name].value)
          ? "success"
          : "error",
      },
    }));
  };

  useEffect(() => {
    setSubmitDisabled(
      !!Object.values(inputState)
        .map((obj) => obj.status)
        .find((status) => status !== "success")
    );
  }, [inputState]);

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <h1 css={s.title}>회원가입</h1>
        {
          inputItems.map(inputItem => inputItem.element)
        }
      </div>
      <button css={s.submitButton} disabled={submitDisabled}>
        가입하기
      </button>
    </div>
  );
}

export default Signup;
/*
username, password, checkpassword, fullname(한글), email
javascript 정규 표현식을 각각 만들어주고 error 메세지도 만들어줘
*/
