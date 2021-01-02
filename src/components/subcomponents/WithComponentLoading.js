import React from 'react';
import TextCard from "./TextCard";

function WithComponentLoading(Component) {
    const loadText = 'Loading...';

    return function WithLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return (
            <TextCard subTitle={loadText}/>
        );
    }
}

export default WithComponentLoading;