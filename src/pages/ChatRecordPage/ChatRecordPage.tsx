import React, { Component, useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import words_obj from './words';

import './ChatRecordPage.scss';

interface chatRecords {
  char: string;
  words: string;
}

const ChatRecordPage = (props: any) => {
  const initState = {};
  const [state, setState] = useState<any>(initState);

  useEffect(() => {}, []);

  //拆分台词, 做成{char:'',words:''}放到list中
  //台词格式为: [角色id]#[台词]$
  const split_chat_record = (words: string, records_list: chatRecords[]) => {
    const split_words = words.split('$');
    split_words.map(it => {
      const [char, words] = it.split('#');
      char &&
        words &&
        records_list.push({
          char: char,
          words: words,
        });
    });
    return records_list;
  };
  /*
  char: 0:♀-a女主, 1:♀-b美女制作, 2:♂-制作c话多经常在线上, 3:♂-制作d, 4:♂-作画e, 
  ♀-5:作画f少出现, 6:♂-CGg, ♀-7:背景h软妹, 8:♂-摄影i, 9:♂-演出j说话比较正经, ♀-10:制作k, 
  11:♂-作画m
  */
  const records_list_1: chatRecords[] = [];
  const records_list_2: chatRecords[] = [];
  split_chat_record(words_obj.words_1.words, records_list_1);
  split_chat_record(words_obj.words_2.words, records_list_2);

  /*
  char: 0:♀-a女主, 1:♀-b美女制作
  */

  /*
  获取头像
  id：角色id, me_id: 现在在哪个角色的视角
   */
  const get_icon_src = (id: number | string) => {
    let icon_src: string = '';
    /*//require好像不能用变量作为路径,只能写死?
    let icon_name = '../../resources/icons/' + id + '.png';
    icon_src = require(icon_name).default;*/
    switch (id) {
      case 'a':
        icon_src = require('../../resources/icons/a.png').default;
        break;
      case 'b':
        icon_src = require('../../resources/icons/b.png').default;
        break;
      case 'c':
        icon_src = require('../../resources/icons/c.png').default;
        break;
      case 'd':
        icon_src = require('../../resources/icons/d.png').default;
        break;
      case 'e':
        icon_src = require('../../resources/icons/e.png').default;
        break;
      case 'f':
        icon_src = require('../../resources/icons/f.png').default;
        break;
      case 'g':
        icon_src = require('../../resources/icons/g.png').default;
        break;
      case 'h':
        icon_src = require('../../resources/icons/h.png').default;
        break;
      case 'i':
        icon_src = require('../../resources/icons/i.png').default;
        break;
      case 'j':
        icon_src = require('../../resources/icons/j.png').default;
        break;
      case 'k':
        icon_src = require('../../resources/icons/k.png').default;
        break;
      case 'm':
        icon_src = require('../../resources/icons/m.png').default;
        break;
      default:
        break;
    }
    return icon_src;
  };

  //获取名字
  const getName = (id: number | string) => {
    const id_names = [
      { id: 'a', name: '' },
      { id: 'b', name: '' },
      { id: 'c', name: '制作c' },
      { id: 'd', name: '制作d' },
      { id: 'e', name: '作画e' },
      { id: 'f', name: '作画f' },
      { id: 'g', name: 'CG g' },
      { id: 'h', name: '背景h' },
      { id: 'i', name: '摄影i' },
      { id: 'j', name: '演出j' },
      { id: 'k', name: '制作k' },
      { id: 'm', name: '作画m' },
    ];
    for (var i in id_names) {
      if (id_names[i].id == id) {
        return id_names[i].name;
      }
    }
  };

  const get_chat_div = (list: chatRecords[], me_id: string) => {
    return list.map(it => {
      return it.char === 'date' ? (
        <div className='chat_date border_none'>{it.words}</div>
      ) : (
        <div>
          {it.char == me_id || <div className={'name'}>{getName(it.char)}</div>}
          <div className={'word_item '.concat(it.char == me_id ? 'chat_box_right' : '').concat()}>
            <img src={get_icon_src(it.char)} className='icon' />
            {it.words[0] === '\t' || (
              <img src={require('../../resources/icons/horn.png').default} className='icon_horn' />
            )}
            <div className={'words '.concat(it.words[0] === '\t' ? 'border_none' : '')}>{it.words}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={'chat_record_page '.concat(props.className)}>
      <div className='word_list'>{get_chat_div(records_list_1, words_obj.words_1.me_id)}</div>
      <div>Part -- 2</div>
      <div className='word_list japanese_words'>{get_chat_div(records_list_2, words_obj.words_2.me_id)}</div>
    </div>
  );
};
ChatRecordPage.defaultProps = {};
export default ChatRecordPage;
