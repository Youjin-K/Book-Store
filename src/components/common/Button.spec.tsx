import React from 'react';
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
  const renderButton = (props = {}) => {
    return render(
      <BookStoreThemeProvider>
        <Button 
          size="medium" 
          scheme="primary"
          {...props}
        >
          테스트 버튼
        </Button>
      </BookStoreThemeProvider>
    );
  };

  it("렌더링 확인", () => {
    renderButton();
    expect(screen.getByText("테스트 버튼")).toBeInTheDocument();
  });

  it("size props에 따른 스타일 적용", () => {
    renderButton({ size: "large" });
    const button = screen.getByText("테스트 버튼");
    expect(button).toHaveStyle({
      fontSize: "1.5rem",
      padding: "1rem 2rem"
    });
  });

  it("scheme props에 따른 스타일 적용", () => {
    renderButton({ scheme: "normal" });
    const button = screen.getByText("테스트 버튼");
    expect(button).toHaveStyle({
      color: "black",
      backgroundColor: "lightgray"
    });
  });

  it("disabled 상태 확인", () => {
    renderButton({ disabled: true });
    const button = screen.getByText("테스트 버튼");
    expect(button).toHaveStyle({ opacity: 0.5 });
    expect(button).toHaveStyle({ pointerEvents: "none" });
  });

  it("isLoading 상태 확인", () => {
    renderButton({ isLoading: true });
    const button = screen.getByText("테스트 버튼");
    expect(button).toHaveStyle({ opacity: 0.5 });
  });

  it("기본값 확인", () => {
    renderButton();
    const button = screen.getByText("테스트 버튼");
    expect(button).not.toHaveStyle({ opacity: 0.5 });
    expect(button).not.toHaveStyle({ pointerEvents: "none" });
  });
});