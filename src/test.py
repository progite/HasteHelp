import NLPTools

sentence = 'I want to learn HTML and JavaScript.'

doc = NLPTools.process(sentence)

for s in doc.sentences:
    for token in s.tokens:
        print("("+token.raw+", "+str(token.PoS)+")", end=" ")
