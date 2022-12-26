# Rollup Bundling

`rollup.config.js` 에 여러 플러그인을 추가해줘야 정상적으로 번들링이 가능합니다.

1. `@svgr/rollup` - svg 를 컴포넌트처럼 사용가능함.
2. `@rollup/plugin-url` - svg를 `export { ReactComponent as pencil } from "./pencil.svg";` 다음과 같은 형태로 사용가능하게 해줌.
3. `@rollup/plugin-commonjs` - commonjs 모듈들을 import 할 수 있음.

4. babel 프리셋 설정 중 `["@babel/react", { runtime: "automatic" }]` automatic 처리를 해줘야 emotion의 jsxImportSource를 빌드가능.

# Peer Dependency

라이브러리 자체의 용량을 줄이기위해 peer dependency를 적극활용한다.

특히, `react`, `react-dom` 은 사이즈가 크기때문에 꼭 처리해줘야한다.

rollup의 `rollup-plugin-peer-deps-external` 플러그인을 사용하면 위 처리를 해줄 수 있다.

> https://velog.io/@velopert/bundle-with-rollup-and-publish-to-npm

> https://dev.to/yvonnickfrin/how-to-handle-peer-dependencies-when-developing-modules-18fa
