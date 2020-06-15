import React from 'react';
import Onboarding from './View/Onboarding';

const index = ({data,onPressSkip}) => {
    return (
        <>
            <Onboarding data={data}  onPressSkip={onPressSkip} />
        </>
    );
}

export default index;