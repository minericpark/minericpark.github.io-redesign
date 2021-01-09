import React from 'react';
import LoadingCard from "./subcomponents/LoadingCard";

function WithComponentLoading(Component) {

    return function WithLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return (
            <LoadingCard />
        );
    }
}

export default WithComponentLoading;