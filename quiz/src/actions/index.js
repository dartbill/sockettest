import axios from 'axios';



export const GetQuestions = cat => {

    console.log(cat.cat)
    console.log(cat.level)
    console.log(cat.typeOfQ)

    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://opentdb.com/api.php?&amount=10&category=17&difficulty=hard&type=multiple')
            let newArray = data.results.map((url) => (url))
            dispatch({
                type: 'TEST',
                payload: newArray
            })
        } catch (err) {
        }
    }
}
















// export const GetQuestions = cat => {

//     // console.log(cat.type)
//     // const loadResult = ({ category, type, difficulty, question, correct_answer, incorrect_answers }) => ({
//     //     type: 'TEST',
//     //     payload: { category: category, type: type, difficulty: difficulty, question: question, correct_answer: correct_answer, incorrect_answers: incorrect_answers }
//     // });


//     const loadResult = () => ({
//         type: 'TEST',
//         payload: []
//     });


//     return async dispatch => {
//         try {
//             let opts = { headers: { 'Accept': 'application/json' } }
//             let { data } = await axios.get(`https://opentdb.com/api.php?&amount=10&category=17&difficulty=hard&type=multiple`, opts)
//             // let arr = []
//             // dispatch(loadResult(data.results[1]))
//             // console.log(data.results)
//             const something = { category: data.results[1].category, type: data.results[1].type, difficulty: data.results[1].difficulty, question: data.results[1].question, correct_answer: data.results[1].correct_answer, incorrect_answers: data.results[1].incorrect_answers }
//             dispatch(loadResult(data.results))
//             // console.log(something)
//             // for (var i = 0; i < data.results.length; i++) {
//             // console.log(data.results[i]);
//             //Do something
//             //     arr.push(data.results[i])
//             // }
//             // console.log(arr)

//             // data.results.forEach((q) => {
//             //     const something = { category: q.category, type: q.type, difficulty: q.difficulty, question: q.question, correct_answer: q.correct_answer, incorrect_answers: q.incorrect_answers }
//             //     // console.log(something)
//             //     // arr.results.push(something)
//             //     arr.push(dispatch(loadResult(something)))
//             // })
//             // console.log(arr)
//             // dispatch(loadResult(arr))
//             // arr.forEach((a) => {
//             // })
//             // const something = { category: data.results[1].category, type: data.results[1].type, difficulty: data.results[1].difficulty, question: data.results[1].question, correct_answer: data.results[1].correct_answer, incorrect_answers: data.results[1].incorrect_answers }
//             // console.log(dispatch(loadResult(something)))
//             // console.log(arr)

//         } catch (err) {
//             console.warn(err.message);
//         };
//     };
// };






