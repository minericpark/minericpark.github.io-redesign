import React from 'react';
import RepositoryCard from "./RepositoryCard";

function WithComponentLoading(Component) {
    const loadText = 'Loading...';

    return function WithLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return (
            <RepositoryCard subTitle={loadText}/>
        );
    }
}

export default WithComponentLoading;