#!/bin/sh
#count = 0
#filename = 0
mkdir ../results/$1

for file in ../temp/*
do
	curl "https://dictation.nuancemobility.net:443/NMDPAsrCmdServlet/dictation?appId=NMDPTRIAL_xun_su_mail_mcgill_ca20160220144129&appKey=86af83f5902afa384a1614acf23a7bcca812cb9bc1420f716c46fbc5a11e2d27cdb11d5ddb1795252daad11fe44deb8c5fb72820f93791657e8c2a1fab584678" -H "Content-Type: audio/x-wav;codec=pcm;bit=16;rate=16000" -H "X-Dictation-NBestListSize: 1" -H "Accept-Language: ENUS" -H "Transfer-Encoding: chunked" -H "Accept: application/xml" -H "Accept-Topic: Dictation" -k --data-binary @../temp/$filename -v >> ../results/$1/$count &
	let "count=count+5"
	let "filename=filename+1"
done

rm ../temp/*
rm ../audio/*

