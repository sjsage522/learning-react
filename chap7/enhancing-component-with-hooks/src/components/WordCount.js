import {useEffect, useMemo, useCallback} from "react";
import {useAnyKeyToRender} from "../useAnyKeyToRender";

export default function WordCount({children = ""}) {
    useAnyKeyToRender();

    /* useMemo */
    const words = useMemo(() => {
        return children.split(" ");
    }, [children]) //deps : 의존 관계 배열

    useEffect(() => {
        console.log("fresh render [words]");
    }, [words]);
    /**/

    /* useCallback */
    const fn = useCallback(() => {
        console.log("hello");
    }, []);

    useEffect(() => {
        console.log("fresh render [fn]");
        fn();
    }, [fn])
    /**/

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    )
}