import client from './configSanity'

export const sendMessage = async (data) => {
    const { name, email, number, subject, message } = data;
    const messageData = {
        name,
        email,
        number,
        subject,
        message,
        createdAt: new Date().toISOString()
    }
    try {
        await client.create({
            _type: 'message',
            ...messageData
        })
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}