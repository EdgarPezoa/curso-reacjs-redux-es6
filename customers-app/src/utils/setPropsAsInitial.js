import React from 'react';

export const setPropsAsInitial = WrappedComponent => props =>(
    <WrappedComponent {...props} 
        initialValues={ props } 
    />
);