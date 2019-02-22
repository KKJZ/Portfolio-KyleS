export const NAME_CHANGE = "NAME_CHANGE";
export const setName = name => ({
    type: NAME_CHANGE,
    name
});

export const SUBJECT_CHANGE = "SUBJECT_CHANGE";
export const setSubject = subject => ({
    type: SUBJECT_CHANGE,
    subject
});

export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const setEmail = email => ({
    type: EMAIL_CHANGE,
    email
});

export const CONTENT_CHANGE = "CONTENT_CHANGE";
export const setContent = content => ({
    type: CONTENT_CHANGE,
    content
});