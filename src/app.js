import './script/element/app-footer.js';
import './script/element/app-header.js';
import './script/element/app-content.js';
import './script/element/app-render-gacha.js';
import $ from 'jquery';

function main(){
    const buttonGenerate = $('.generateButton');

    function RenderWaifu(srcValue){
        const getAppGachaRender = $('<app-render-gacha></app-render-gacha>');
        const getFigureAppContent = $('.container-app-content');

        getFigureAppContent.append(getAppGachaRender);

        getAppGachaRender[0].imgUrl = srcValue;
    }

    const getWaifu = async () => {
        try {
            const response = await fetch(`https://envyswaifuapi.vercel.app/api`);
            const responseJSON = await response.json();
            RenderWaifu(responseJSON);
        } catch (error){
            alert(`Gagal karena ${error}`);
        }
    };

    buttonGenerate.on('click', function(){
        const deleterender = $('app-render-gacha');

        if (deleterender.length == 0){
            getWaifu();
        } else {
            getWaifu();
            deleterender.remove();
        }
    });
}

export default main;