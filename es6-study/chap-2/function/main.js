const emails = ['jaeho@naver.com', 'jaeho@gmail.com', 'jaeho@daum.com', 'hoya@gmail.com', 'nco@no.com'];

const cleaned = emails.map((email,index) => ({
    username: email.split('@')[0],
    index
}));
console.table(cleaned);