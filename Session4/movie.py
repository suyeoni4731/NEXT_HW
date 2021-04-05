def extract_info(movie_list) :
    final_result = []

    for movie in movie_list:
        title = movie.find("dt",{'class': 'tit'}).find('a').string
        image_src = movie.find("div", {"class" : "thumb"}).find("img")['src']

        movie_info = {
            'title' : title,
            'image_src' : image_src,

        }

        final_result.append(movie_info)

    return final_result