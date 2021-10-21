import React, { Component, useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import words_obj from './words';

import './ChatRecordPage.scss';

interface chatRecords {
  char: number;
  words: string;
}

const ChatRecordPage = (props: any) => {
  const initState = {};
  const [state, setState] = useState<any>(initState);

  useEffect(() => {}, []);

  /*
  char: 0:♀-猫草, 1:♀-被盗当事人, 2:♂-爱凑热闹,说话比较幼稚, 3:♂-程序员,理性派,
   4:♂-东北大哥,曾被骗过,容易冲动, 5:偶尔出现的群友, 6:偶尔出现的群友
  */
  const split_words_1 = words_obj.words_1.words.split('$');
  const chatRecords_1: chatRecords[] = [];
  split_words_1.map(it => {
    const [char, words] = it.split('#');
    char &&
      words &&
      chatRecords_1.push({
        char: Number(char),
        words: words,
      });
  });

  /*
  char: 0:♀-被盗当事人, 1:♀-土豪朋友
  */

  const url = '../../resources/icons/a.png';

  /*
  获取头像
  id：角色id, me_id: 现在在哪个角色的视角
   */
  const get_icon_src = (id: number | string) => {
    let icon_src: string = '';
    switch (id) {
      case 0:
        icon_src = require('../../resources/icons/a.png').default;
        break;
      case 1:
        icon_src = require('../../resources/icons/b.png').default;
        break;
      case 2:
        icon_src = require('../../resources/icons/c.png').default;
        break;
      case 3:
        icon_src = require('../../resources/icons/d.png').default;
        break;
      case 4:
        icon_src = require('../../resources/icons/e.png').default;
        break;
      case 5:
        icon_src = require('../../resources/icons/f.png').default;
        break;
      case 6:
        icon_src = require('../../resources/icons/g.png').default;
        break;
      case 7:
        icon_src = require('../../resources/icons/h.png').default;
        break;
      default:
        break;
    }
    return icon_src;
  };

  return (
    <div className={'chat_record_page '.concat(props.className)}>
      <div className='word_list'>
        {chatRecords_1.map(it => {
          return (
            <div className={'word_item '.concat(it.char == words_obj.words_1.me_id ? 'chat_box_right' : '').concat()}>
              <img src={get_icon_src(it.char)} className='icon' />
              {it.words[0] === '\t' || (
                <img src={require('../../resources/icons/horn.png').default} className='icon_horn' />
              )}
              <div className={'words '.concat(it.words[0] === '\t' ? 'border_none' : '')}>{it.words}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
ChatRecordPage.defaultProps = {};
export default ChatRecordPage;
