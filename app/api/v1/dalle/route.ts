import { Configuration, CreateImageRequest, OpenAIApi } from 'openai'
import { NextResponse } from 'next/server'
import axios from 'axios'

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY })

const openai = new OpenAIApi(config)

// console.log('OpenAIApi(config): ', config)

export async function POST(req: Request, res: Response) {
  try {
    // const prompt: string = req.body as unknown as string
    const prompt = await req.json()

    console.log('OpenAIApi(config): ', typeof prompt.body)
    const response = await openai.createImage({
      prompt: prompt.body,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    })

    const image = response.data.data[0].b64_json

    return NextResponse.json({ photo: image })
  } catch (error: any) {
    // console.log(error)

    if (error.response && error.response.status === 400) {
      // Access the error message from the data field of the response
      const errorMessage = error.response.data.error

      console.error('API Error:', errorMessage)
    }

    return NextResponse.json({ error: 'Something went wrong' })
  }
}

const usageEndpoint = 'https://api.openai.com/v1/usage'

async function getUsage() {
  console.log('config.apiKey: ', config)
  try {
    const response = await axios.get(usageEndpoint, {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    })

    console.log('Usage:', response.data)
  } catch (error) {
    console.error('Error getting usage:', error)
  }
}

// getUsage()
