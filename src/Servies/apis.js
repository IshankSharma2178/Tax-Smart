const BASE_URL = process.env.REACT_APP_BASE_URL

export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API:BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API:BASE_URL + "/profile/updateProfiLe",
    CHANGE_PASSWORD_API:BASE_URL + "/auth/changePassword",
    DELETE_PROFILE_API:BASE_URL + "/profile/deleteProfile",
}

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }

export const moduleEndpoints={
    Mark_Module_Completed_API : BASE_URL+"/completeModule",
    MARK_TOPIC_COMPLETED_API : BASE_URL+"/completeTopic",
    MARK_QUIZ_COMPLETED_API : BASE_URL+"/completedQuiz",
    SET_COMPLETED_QUEST_API : BASE_URL+"/CompletedNumberOfLectures",
    GET_UNCOMPLETED_MODULE_API : BASE_URL+"/UncompletedModule",
    GET_COMPLETED_MODULE_API : BASE_URL+"/getCompletedQuestion",
    UPDATE_COINS_API : BASE_URL+"/updateCoins",
    GET_COINS_API : BASE_URL+"/getcoins",
}

export const studentEndpoints ={
    PAYMENT_API: BASE_URL+"/capturePayment",
    VERIFY_PAYMENT_API: BASE_URL+"/verifyPayment",
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL+"/sendPaymentSuccessEmail"
}