export const CMS_ACCESS_TOKEN = "CMS_ACCESS_TOKEN"
export const CMS_REFRESH_TOKEN = "CMS_REFRESH_TOKEN"
export const CMS_USER_ID = "CMS_USER_ID"
export const CMS_USER_INFO = "CMS_USER_INFO"

export const BASE_URL = '';

export const ENDPOINTS = {
    LOGIN: `/user/login`,
    SIGN_UP: `/user/register`,
    VERIFY_ACCOUNT: `/user/verify-user`,
    RESEND_VERIFY_MAIL: `/user/resend-verify-email`,
    FORGET_PASSWORD: `/user/forgot-password`,
    CONFIRM_FORGET_PASSWORD: `/user/confirm-forgot-password`,
    PROFILE: `/user/profile`,
    UPDATE_INFO: `/user/profile/update-info`,
    UPLOAD_AVATAR: `/user/upload-avatar`,
    NEW_ACCESS_TOKEN: `/user/new-access-token`,
    CHANGE_PASSWORD: `/user/profile/change-password`,
    LOGOUT: `/user/logout`,

 
    DASHBOARD_INFO: `/dashboard/infos`,
    NETWORK: '/network',

}
export const ROUTES = {
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/sign-up',
    FORGET_PASSWORD: '/auth/forgot-password',
    NEW_PASSWORD: '/auth/new-password',
    DASHBOARD: '/',
    PROFILE: '/profile',
  
}

export const MESSAGES = {
    "PASSWORD_INCORRECT": "Your password is incorrect",
    "USER_IS_NOT_EXIST": "This user does not exist",
    "NOT_FORBIDDEN": "You don't have permission to perform this action",
    "PERMISSION_DENIED": "Permission denied",
    "BLOCKED": "Your account was blocked! Please contact Admin for more information",
    "WAITING_VERIFICATION": "User account must be verified.",
    "EMAIL_INVALID": "Your email is invalid.",
    "EMAIL_IN_USE": "Email is in use",
    "USERNAME_IN_USE": "Username is in use",
    "CONFIRM_PASSWORD_INVALID": "Confirm password is incorrect",
    "USER_VERIFIED": "User account has been verified",
    "RESEND_VERIFY_EMAIL_OK": "Verification number resent successfully! Please check your email!",
    "VERIFICATION_NUMBER_EXPIRED": "The verification number is expired",
    "VERIFICATION_NUMBER_INCORRECT": "The verification number is incorrect",


    "USER_IS_NOT_ACTIVE": "This account is not verified. You can not change password",
    "USERNAME_FORMAT_INVALID": "Username can only contain lower/uppercase letters, numbers, and periods (.)",
    "PASSWORD_FORMAT_INVALID": "Must have at least 8 characters and contain letters, numbers, and symbols.",
    "LENGTH_NAME_INVALID": "Name length is invalid",
    "NAME_MUST_NOT_CONTAIN_SPECIAL_CHARACTOR": "Name must not contains special characters",
    "UNKNOWN_ERROR": "Oops! Something wrong happened",
    "VERIFY_GUIDE": 'Enter the verification code we sent you in the email. (Please check in Spam, Promotion or Important part for sure)',
    "REGISTER_SUCCESS": 'Register successfully!',
    "OTP_LENGTH_ERROR": 'Verification code must have length of 6',
    "OTP_RESEND_OK": 'Resend verification code successfully',
    "RESET_PWD_SUCCESS": 'Reset password successfully!',
    "REQUIRED_MESSAGE": 'Cannot leave this blank.',
    "AMOUNT_INVALID": 'Amount > 0 and <= ',
    "INVALID_WALLET_ADDRESS": 'Invalid wallet address.',
    "INVALID_PHONE": "Invalid phone number"
};