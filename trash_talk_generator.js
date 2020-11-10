function randomPickTaskAndPhrase(task, phrase) {
    const taskIndex = Math.floor(Math.random() * task.length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    return `${task[taskIndex]}，${phrase[phraseIndex]}吧!`
}

function trashTalkGenerator(option) {
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        founder: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }
    const phrase = ['很簡單','很容易','很快','很正常']
    let result = {
        engineer: false,
        designer: false,
        founder: false,
        trashTalk : ''
    }

    if(!option.job) {
       result.trashTalk = '請選擇職業!'
       return result
    } else {
        switch(option.job) {
            case 'engineer' :
                result.trashTalk += '身為一個工程師，' + randomPickTaskAndPhrase(task.engineer, phrase)
                result.engineer = true
                break
            case 'designer' :
                result.trashTalk += '身為一個設計師，' + randomPickTaskAndPhrase(task.designer, phrase)
                result.designer = true
                break
            case 'founder' :
                result.trashTalk += '身為一個創業家，' + randomPickTaskAndPhrase(task.founder, phrase)
                result.founder = true
                break
        }
        return result
    }
}

module.exports = trashTalkGenerator
