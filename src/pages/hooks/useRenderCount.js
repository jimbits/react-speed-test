import {useRef} from 'react'

function useRenderCount ( ){
    const renderCount = useRef(0)
    return {renderCount: renderCount.current ++}
}

export default useRenderCount