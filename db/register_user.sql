insert into users
    (
    username,
    password,
    profile_pic
    )
values
    (
    ${username},
    ${hash},
    ${profile_pic}
    )
returning user_id, username;