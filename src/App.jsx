import "./App.css";

// 컴포넌트 import
import { BrowserRouter } from "react-router-dom";
import HelloJsx from "./study/components/HelloJsx/HelloJsx";
import HelloProps from "./study/components/HelloProps/HelloProps";
import HelloReact from "./study/components/HelloReact/HelloReact";
import Calculator from "./study/components/State/Calculator/Calculator";
import CountHeader from "./study/components/State/CountHeader/CountHeader";
import CountState from "./study/components/State/CountState/CountState";
import InputSample from "./study/components/State/InputSample/InputSample";
import InputState1 from "./study/components/State/InputState1/InputState1";
import InputStatePractice from "./study/components/State/InputStatePractice/InputStatePractice";
import InputState2 from "./study/components/State/InputState2/InputState2";
import InputState3 from "./study/components/State/InputState3/InputState3";
import Inputstate4 from "./study/components/State/InputState4/InputState4";
import DomRef from "./study/components/Ref/DomRef/DomRef";
import Effect1 from "./study/components/Effect/Effect1/Effect1";
import Effect2 from "./study/components/Effect/Effect2/Effect2";
import Emotion from "./study/components/Emotion/Emotion";
import Emotion2 from "./study/components/Emotion/Emotion2";
import Index from "./TodoList/pages/Index";
import Router1 from "./RouterStudy/Router1/Router1";
import Router2 from "./RouterStudy/Router2/Router2";
import Router3 from "./RouterStudy/Router3/Router3";
import Router4 from "./RouterStudy/Router4/Router4";
import MainRouter from "./RouterStudy/Auth/Routers/MainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRouterReactQuery from "./RouterStudy/Auth/Routers/MainRouterReactQuery";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false,
        staleTime: 1000 * 60, // 데이터는 3초 동안 신선하다고 판단
        retry: 0,
      },
    },
  });
  return (
    <BrowserRouter>
      {/* 여러 컴포넌트를 테스트할 수 있도록 주석 처리 */}
      {/* <HelloJsx />  */}
      {/* <HelloProps /> */}
      {/* <CountState /> */}
      {/* <CountHeader /> */}
      {/* <Calculator /> */}
      {/* <InputState1 /> */}
      {/* <InputSample /> */}
      {/* <InputStatePractice /> */}
      {/* <InputState2 /> */}
      {/* <InputState3 /> */}
      {/* <Inputstate4 /> */}
      {/* <DomRef /> */}
      {/* <Effect1 /> */}
      {/* <Effect2 /> */}
      {/* <Emotion />
        <Emotion2 /> */}
      {/* <Index /> */}
      {/* <Router1 /> */}
      {/* <Router2 /> */}
      {/* <Router3 /> */}
      {/* <Router4 /> */}
      {/* <MainRouter /> */}
      <QueryClientProvider client={queryClient}>
        <MainRouterReactQuery />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
