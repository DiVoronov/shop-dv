import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { StyledWrapperForItemsLists } from './WrapperForItemsLists.style';
import { ItemCard } from '../ItemCard/ItemCard';
import { IProductsObject } from '../../../app/api/shop.types';
import { RadioPanel } from './RadioPanel';
import { CheckboxPanel } from './CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { setOpenCloseFiltersStatus } from '../../../app/Slices/openCloseFiltersSlice';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { Scroll } from '../Scroll/Scroll';

interface IWrapperForItemsListsProps {
  itemsList: IProductsObject[]
  role: 'shop' | 'cart'
};

export const WrapperForItemsLists: React.FC<IWrapperForItemsListsProps> = ({ itemsList, role }) => {

  const isSortFilterMenuOpen = useSelector( (state: RootState) => state.openCloseFilters );


  const [ itemsListForRendering, setItemsListForRendering ] = useState(itemsList);
  const [ categoriesList, setCategoriesList ] = useState<string[]>(['Show all']);
  const [ temporaryListOfItems, setTemporaryListOfItems ] = useState<IProductsObject[]>([]);
  const [ isShowAll, setIsShowAll ] = useState(true);

  useEffect( () => {
    itemsList.map( item => {
      if (categoriesList.find( category => category === item.category) === undefined) {
        const newArray = categoriesList;
        newArray.push(item.category);
        setCategoriesList(newArray);
      };
    });

    setTemporaryListOfItems(itemsList);
    setItemsListForRendering(itemsList);
    setItemsListForRendering([]);

  }, [itemsList]);

  const handleAddRemoveAllItems = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {

    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setIsShowAll(true);
    } else {
      setIsShowAll(false);
    };
  };

  const handleAddRemoveMenClothes = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category ===  "men's clothing")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !==  "men's clothing"))      
    };
  };

  const handleAddRemoveWomenClothes = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "women's clothing")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !== "women's clothing"));
    };
  };

  const handleAddRemoveElectronics = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "electronics")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter( item => item.category !== "electronics"));
    };
  };

  const handleAddRemoveJewelry = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "jewelery")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !== "jewelery"));
    };
  };

  const chooseCategory = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, category: string) => {
    if (category === "women's clothing") {
      return handleAddRemoveWomenClothes(e);
    } else if (category === "men's clothing") {
      return handleAddRemoveMenClothes(e);
    } else if (category === 'jewelery') {
      return handleAddRemoveJewelry(e);
    } else if (category === 'electronics') {
      return handleAddRemoveElectronics(e);
    } else if (category === 'Show all') {
      return handleAddRemoveAllItems(e)
    };
  };

  const sortOptions = [
    'Від меншої ціни',
    'Від більшої ціни',
    'За популярністю',
    'За номером'
  ];

  const sortByPriceIncrease = (a: IProductsObject, b: IProductsObject) => {
    if (a.price > b.price) { return 1 } else
    if (a.price < b.price) { return -1 } else return 0;
  };
  const sortByPriceDecrease = (a: IProductsObject, b: IProductsObject) => {
    if (a.price < b.price) { return 1 } else
    if (a.price > b.price) { return -1 } else return 0;
  };
  const sortByPopular = (a: IProductsObject, b: IProductsObject) => {
    if (a.rating.count > b.rating.count) { return 1 } else
    if (a.rating.count < b.rating.count) { return -1 } else return 0;
  };
  const sortByArticle = (a: IProductsObject, b: IProductsObject) => {
    if (a.id > b.id) { return 1 } else
    if (a.id < b.id) { return -1 } else return 0;
  };

  const handleSort = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, radioOptions: string) => {
    const itemsListForRenderingCopy = [...itemsListForRendering];
    const temporaryListOfItemsCopy = [...temporaryListOfItems];

    if (radioOptions === 'Від меншої ціни') {
      const arrayPriceIncreaseSort = itemsListForRenderingCopy.sort(sortByPriceIncrease);
      const arrayPriceIncreaseSortTEMP = temporaryListOfItemsCopy.sort(sortByPriceIncrease);
      setItemsListForRendering(arrayPriceIncreaseSort);
      setTemporaryListOfItems(arrayPriceIncreaseSortTEMP);
    } else if (radioOptions === 'Від більшої ціни') {
      const arrayPriceDecreaseSort = itemsListForRenderingCopy.sort(sortByPriceDecrease);
      const arrayPriceDecreaseSortTEMP = temporaryListOfItemsCopy.sort(sortByPriceDecrease);
      setItemsListForRendering(arrayPriceDecreaseSort);
      setTemporaryListOfItems(arrayPriceDecreaseSortTEMP);
    } else if (radioOptions === 'За популярністю') {
      const arrayPopularSort = itemsListForRenderingCopy.sort(sortByPopular);
      const arrayPopularSortTEMP = temporaryListOfItemsCopy.sort(sortByPopular);
      setItemsListForRendering(arrayPopularSort);
      setTemporaryListOfItems(arrayPopularSortTEMP);
    } else if (radioOptions === 'За номером') {
      const arrayArticleSort = itemsListForRenderingCopy.sort(sortByArticle);
      const arrayArticleSortTEMP = temporaryListOfItemsCopy.sort(sortByArticle);
      setItemsListForRendering(arrayArticleSort);
      setTemporaryListOfItems(arrayArticleSortTEMP);
    };
  };

  const dispatch = useDispatch();
  const showHideMenuFilters = () => {
    dispatch(setOpenCloseFiltersStatus(!isSortFilterMenuOpen));
  };

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <StyledWrapperForItemsLists>
      <Box component='div' className='button-back' onClick={goBack}>
          <ArrowBackIcon/>
          <Box component='div' className='button-back-text'>Повернутися назад</Box>
          <Box component='div' className='button-back-empty'></Box>
      </Box>
      <Box component='div' className='sort-filter-menu-box'>
        <Box component='div' className='show-hide-sort-filter' onClick={showHideMenuFilters} sx={{mt: 3, mb: 3}}>
          {
            isSortFilterMenuOpen ? 'Приховати фільтри' : 'Показати фільтри'
          }
        </Box>
        {
          isSortFilterMenuOpen &&
          <Box component='div' className='sort-filter-menu-inner-box'>
            <Box component='div' className='sort-menu-box'>
              <RadioPanel radioOptions={sortOptions} handleSort={handleSort}/>
            </Box>
            <Box component='div' className='filter-menu-box'>
              <CheckboxPanel checkboxOptions={categoriesList} chooseCategoryFn={chooseCategory}/>
            </Box> 
          </Box>
        }
      </Box>
      
      <Box component='div' className='items-list-menu-box'>
        {
          isShowAll
          ?
          <>
          {
            temporaryListOfItems.map( (item, index) => {
              return (
                <ItemCard key={index} item={item} role={role}/>
              );
            })
          }
          </>
          :
          <>
          {
            itemsListForRendering.map( (item, index) => {
              return (
                <ItemCard key={index} item={item} role={role}/>
              );
            })
          }
          </>
        }
      </Box>
      <Scroll/>
    </StyledWrapperForItemsLists>
  );
};