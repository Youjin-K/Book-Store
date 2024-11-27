import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookStoreThemeProvider } from "../../context/themeContext";
import InputText from "./InputText";

describe("InputText 컴포넌트 테스트", () => {
  const renderInputText = (props = {}) => {
    return render(
      <BookStoreThemeProvider>
        <InputText {...props} />
      </BookStoreThemeProvider>
    );
  };

  it("렌더링 확인", () => {
    renderInputText();
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("placeholder 표시 확인", () => {
    const placeholder = "테스트 플레이스홀더";
    renderInputText({ placeholder });
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("ref 전달 확인", () => {
    const ref = React.createRef<HTMLInputElement>();
    renderInputText({ ref });
    const inputElement = screen.getByRole("textbox");
    expect(ref.current).toBe(inputElement);
  });

  it("입력 동작 확인", async () => {
    renderInputText();
    const inputElement = screen.getByRole("textbox");
    const testValue = "테스트 입력";
    
    await userEvent.type(inputElement, testValue);
    expect(inputElement).toHaveValue(testValue);
  });

  it("기본 스타일 적용 확인", () => {
    renderInputText();
    const inputElement = screen.getByRole("textbox");
    
    expect(inputElement).toHaveStyle({
      padding: '0.25rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5'
    });
  });

  it("type이 text인지 확인", () => {
    renderInputText();
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "text");
  });
});