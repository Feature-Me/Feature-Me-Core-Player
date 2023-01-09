import ErrorBoundary from 'Components/errorBoundary/errorBoundary';
import React, { ComponentType, lazy } from 'react';

const lazyLoad = (factory: () => Promise<{ default: ComponentType<any> }>) => lazy(async () => {
    try {
        return await factory();
    } catch (e) {
        return {
            default: () => {
                React.useEffect(()=>{
                    throw new Error("Chunk load error:could not load components.");
                },[])
                return (
                    <></>
                )
            }
        };
    }
});

export default lazyLoad;