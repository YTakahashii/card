import { css } from "hono/css";

const linkStyle = css`
  color: #4da8da;
  text-decoration: underline;
`;

const sectionTitleStyle = css`
  font-size: 20px;
  font-weight: 600;
`;

const sectionGroupStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const subtleStyle = css`
  font-size: 14px;
  color: #2d3748;
  text-align: center;
  word-break: keep-all;
`;

export const Card = () => {
  return (
    <div
      class={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        border-radius: 10px;
        padding: 16px;
        width: 100%;
        height: fit-content;
        max-width: 375px;
      `}
    >
      <img
        src="/static/profile.jpeg"
        alt="プロフィール画像"
        class={css`
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid white;
        `}
      />
      <div>
        <div
          class={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
          `}
        >
          <h1
            class={css`
              font-size: 24px;
              font-weight: bold;
            `}
          >
            髙橋 佑太
          </h1>
          <p class={subtleStyle}>Yuta Takahashi</p>
          <p class={subtleStyle}>Software Engineer</p>
          <p class={subtleStyle}>
            株式会社メドレー <wbr />
            医療プラットフォーム本部 医科診療所プロダクト開発室 <wbr />
            AI推進グループ
          </p>
        </div>
      </div>

      <div class={sectionGroupStyle}>
        <h3 class={sectionTitleStyle}>GitHub</h3>
        <a
          href="https://github.com/YTakahashii"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          @YTakahashii
        </a>
      </div>

      <div class={sectionGroupStyle}>
        <h3 class={sectionTitleStyle}>X(Twitter)</h3>
        <a
          href="https://twitter.com/Wakeupsloth"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          @Wakeupsloth
        </a>
      </div>

      <div class={sectionGroupStyle}>
        <h3 class={sectionTitleStyle}>Facebook</h3>
        <a
          href="https://www.facebook.com/yuta.takahashi.me"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          @yuta.takahashi.me
        </a>
      </div>

      <div class={sectionGroupStyle}>
        <h3 class={sectionTitleStyle}>Zenn</h3>
        <a
          href="https://zenn.dev/yuta_takahashi"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          @yuta_takahashi
        </a>
      </div>

      <p
        class={css`
          font-size: 12px;
          color: #4a5568;
        `}
      >
        This site is built with{" "}
        <a
          href="https://hono.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          Hono
        </a>{" "}
        and{" "}
        <a
          href="https://pages.cloudflare.com/"
          target="_blank"
          rel="noopener noreferrer"
          class={linkStyle}
        >
          Cloudflare Pages
        </a>
        .
      </p>
    </div>
  );
};
