В Bootstrap есть компонент nav (Обязательно перейдите по ссылке и покликайте по нему). Один из вариантов этого компонента — это табы, которые переключаются, по нажатию, без перезагрузки страницы.

<nav>
    <div class="nav nav-tabs">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
    </div>
</nav>
<div class="tab-content">
    <div class="tab-pane active" id="home">Home tab</div>
    <div class="tab-pane" id="profile">Profile tab</div>
</div>
По клику на таб происходит следующее:

Класс active снимается с текущего элемента меню и активного блока с данными.
Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными.