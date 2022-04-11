import React, { useState } from 'react';
import SigninPopover from '../popovers/signinPopover';
import LocationModal from '../components/LocationModal';
import Signup from '../components/signUp/signUp';
import SignIn from '../components/signIn/signIn';
export default function HomePage() {
  return (<>
      <SignIn/>
      {/* <LocationModal/> */}
      </>
  )
}