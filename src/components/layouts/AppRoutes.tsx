import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutes: React.FC = () => (
    <Routes>
        <>
            <Route path='/user:id' element={<>dasd</>} />
            {/*<Route path='*' element={<Navigate to='/dashboard' replace />} />*/}
        </>
    </Routes>
)

