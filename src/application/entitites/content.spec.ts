import { Content } from "./content"

describe('Notification Content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Voce recebeu uma solicitação de amizade')
    
        expect(content).toBeTruthy()
    })
    
    it('should not be able to create a notification content with less than 5 caracters', () => {
        expect(() => new Content('oii')).toThrow()
    })
    
    it('should not be able to create a notification content with more than 240 caracters', () => {
        expect(() => new Content('o'.repeat(241))).toThrow()
    })
})

