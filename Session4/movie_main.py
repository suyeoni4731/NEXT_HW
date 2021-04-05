import requests
from bs4 import BeautifulSoup
from movie import extract_info
import csv

file = open('movie.csv', mode = 'w', newline ='', encoding='utf-8-sig')
writer = csv.writer(file)
writer.writerow(["제목","이미지 주소"])

MOVIE_URL = f'https://movie.naver.com/movie/running/current.nhn'

movie_html = requests.get(MOVIE_URL)
movie_soup = BeautifulSoup(movie_html.text,"html.parser")

movie_list_box = movie_soup.find('ul',{'class':'lst_detail_t1'})
movie_list = movie_list_box.find_all("li")

final_result = extract_info(movie_list)

for result in final_result:
    row = []
    row.append(result['title'])
    row.append(result['image_src'])
    writer.writerow(row)