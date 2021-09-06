# enhancing-component-with-hooks

## useLayoutEffect

### 이벤트 발생 순서
1. 렌더링
2. useLayoutEffect 호출
3. 브라우저의 화면 그리기 : 이 시점에 컴포넌트에 해당하는 엘리먼트가 실제로 DOM에 추가됨
4. useEffect 호출

## Hooks 규칙
- 훅스는 컴포넌트 영역 안에서만 작동한다.
- 기능을 여러 훅으로 나누면 좋다.
- 최상위 수준에서만 훅을 호출해야 한다.
    - 조건에 따른 로직 처리 방법
        - ```javascript
            function Counter() {
                const [count, setCount] = useState(0);
                const [checked, setChecked] =
                    useState(
                        count => (count < 5) ?
                        undefined : !checked
                    );
                //...     
            } 
          ```
    -  비동기 처리
        - ```javascript
            useEffect(() => {
                const fn = async () => {
                    await SomePromise();
                };      
                fn();
            })
          ```

