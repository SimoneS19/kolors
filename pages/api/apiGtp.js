import axios from "axios";
import OpenAI from "openai";

const Openai = new OpenAI();

const apiGtp = async (term) => {
    const completion = await Openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant designed to output JSON.",
            },
            { role: "user", content: "Who won the world series in 2020?" },
        ],
        params: [{
            query: term,
            per_page: 18
        }],

        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
  }
  
  apiGtp();  

// import axios from "axios";

// const apiGtp = async (term) => {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {       //1
//         headers: {
//             Authorization: 'Client-ID olZ7p-7hBZ8HKmYRNx0IDKjHY9LkgGVG4qK_Qw1UpOg',
//         },
//         params: {
//             query: term,
//             per_page: 18
//         }
//     });

//     return response.data.results;
// };

// export default apiGtp;