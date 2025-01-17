const meaningCloud = 'https://api.meaningcloud.com/sentiment-2.1';
const analyze = async (url, key) => {
    try {
        const res = await fetch(`${meaningCloud}?key=${key}&url=${url}&lang=EN`);
        const data = await res.json();
        const { code, msg } = data.status;
        if (code == 100) {
            return handleError(code, "Please, enter a valid url");
        } else if (code == 212) {
            return handleError(code, msg);
        } else {
            return handleSuccess(data, code);
        }
    } catch (err) {
        console.log("Error fetching data:", err);
        return handleError(500, "Server error");
    }
};

const handleError = (code, msg) => {
    const error ={
      code,
      msg
    }
    return error;
};
const handleSuccess = (data, code) => {
    const {agreement, subjectivity, confidence, score_tag, irony} = data;
    const sample = {
      agreement,
      subjectivity,
      confidence,
      score_tag,
      irony,
    }
    const result = {sample, code};
    return result;
};
module.exports = { analyze };
