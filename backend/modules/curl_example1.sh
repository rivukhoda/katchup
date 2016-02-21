count = 0
filename = 0

for file in ../temp/*
do
	curl "https://dictation.nuancemobility.net:443/NMDPAsrCmdServlet/dictation?appId=NMDPTRIAL_rivu_khoda_gmail_com20160220161406&appKey=6a4a57c8ddf643690d85cc180e1d9468ec8abd5fc169a2e499710b6169cb1ed415759cf26bdf5b78652790734424db30af998f700231549ca25ffd0c2a1be03f&id=C4461956B60B" -H "Content-Type: audio/x-wav;codec=pcm;bit=16;rate=16000" -H "X-Dictation-NBestListSize: 1" -H "Accept-Language: ENUS" -H "Transfer-Encoding: chunked" -H "Accept: application/xml" -H "Accept-Topic: Dictation" -k --data-binary @../temp/$filename -v >> $count
	let "count=count+5"
	let "filename=filename+1"
done

